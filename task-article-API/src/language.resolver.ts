import { Injectable } from '@nestjs/common';
import { I18nResolver } from 'nestjs-i18n';
import { ExecutionContext } from '@nestjs/common';

@Injectable()
export class languageResolver implements I18nResolver {
  resolve(context: ExecutionContext): string {
    const request = context
      .switchToHttp()
      .getRequest<{ headers: { [key: string]: string | undefined } }>();

    const lang = request.headers['accept-language']?.split(',')[0] || 'en';

    return lang;
  }
}
