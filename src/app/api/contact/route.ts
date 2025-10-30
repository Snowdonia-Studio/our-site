import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let body: Record<string, string> = {}

    if (contentType.includes('application/json')) {
      body = await request.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData()
      body = Object.fromEntries(formData.entries()) as Record<string, string>
    } else {
      // Try formData as a fallback
      const formData = await request.formData().catch(() => null)
      if (formData) {
        body = Object.fromEntries(formData.entries()) as Record<string, string>
      }
    }

    const { name = '', email = '', subject = '', message = '' } = body

    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields: email, subject, message' }),
        { status: 400, headers: { 'content-type': 'application/json' } }
      )
    }

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.CONTACT_TO
    const from = process.env.CONTACT_FROM || user

    if (!host || !port || !user || !pass || !to || !from) {
      console.error('Email not configured. Missing one of SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM')
      return new Response(
        JSON.stringify({ ok: false, error: 'Email not configured on server' }),
        { status: 500, headers: { 'content-type': 'application/json' } }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    })

    const html = `
      <div>
        <p><strong>Name:</strong> ${name || '(not provided)'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit;">${message}</pre>
      </div>
    `

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `Name: ${name || '(not provided)'}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(JSON.stringify({ ok: false, error: 'Unexpected server error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    })
  }
}


