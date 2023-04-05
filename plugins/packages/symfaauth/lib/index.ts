import { QueryError, QueryResult, QueryService } from '@tooljet-plugins/common';
import { SourceOptions, QueryOptions } from './types';
import got from 'got';

export default class Symfaauth implements QueryService {
  async run(sourceOptions: SourceOptions, queryOptions: QueryOptions, dataSourceId: string): Promise<QueryResult> {
    const { operation, email, password } = queryOptions;
    const url = 'https://api2.hq2v2.d10.aisnovations.com/api/auth/login';

    try {
      switch (operation) {
        case 'login': {
          const body = {
            email,
            password,
          };

          const headers = {
            authority: 'api2.hq2v2.d10.aisnovations.com',
            accept: 'application/json, text/plain, /',
            'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,pl;q=0.6',
            'content-type': 'application/json',
            cookie:
              '_ym_uid=1661952755232443288; _ym_d=1661952755; ga5K3JL27870=GS1.1.1661952754.1.1.1661952835.0.0.0; _lfa=LF1.1.c82adc636ba38fcd.1653904235851; hubspotutk=02e0f35f64503afccde24b8015eb8111; messagesUtk=6bf42e55de14473e8059ce4f09f2d6fa; _ga=GA1.2.981253803.1661952755; __hstc=198019824.02e0f35f64503afccde24b8015eb8111.1666957751477.1666957751477.1666964251152.2; _ga_X4R9JWTKT3=GS1.1.1666969591.3.0.1666969591.0.0.0; io=NhKU2S-CHUV9le9VAAAE',
            origin: 'https://hq2v2.d10.aisnovations.com',
            referer: 'https://hq2v2.d10.aisnovations.com/',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
          };

          const response = await got(url, {
            method: 'post',
            json: body,
            headers,
          });

          return {
            status: 'ok',
            data: JSON.parse(response.body),
          };

          break;
        }
      }
    } catch (error) {
      throw new QueryError('Query could not be completed', error.message, {});
    }

    return {
      status: 'ok',
      data: {},
    };
  }
}
