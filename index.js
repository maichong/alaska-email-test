/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-05-15
 * @author Liang <liang@maichong.it>
 */

'use strict';

exports.default = class EmailTestDriver {
  constructor(service) {
    this.service = service;
  }

  /**
   * [async] 发送
   * @param data nodemailer e-mail message fields
   */
  send(data) {
    console.log('send email', data);
    return Promise.resolve();
  }
};
