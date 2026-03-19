// src/types/zeptomail.d.ts
declare module 'zeptomail' {
  export class SendMailClient {
    constructor(options: { url: string; token: string });
    sendMail(params: {
      from: { address: string; name?: string };
      to: { email_address: { address: string; name?: string } }[];
      subject: string;
      htmlbody?: string;
      textbody?: string;
      cc?: any[];
      bcc?: any[];
      reply_to?: string;
      attachments?: any[];
    }): Promise<any>;
  }
}
