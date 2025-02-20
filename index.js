/*
 * @Author: kael
 * @Date: 2018-02-14 17:50:28
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  url: /^https?:\/\/\w+\.\w+\.\w+$/,
  ipv4: /^(?:1\d\d|2[0-4]\d|25[0-5]|0?[1-9]\d|0{0,2}\d)(?:\.(?:1\d\d|2[0-4]\d|25[0-5]|0?[1-9]\d|0{0,2}\d)){3}$/,
  idcard:
    /^[1-9]\d{5}(?:19\d{2}|20[0-2][0-2])(?:1[0-2]|0?[1-9])(?:[12]\d|3[01]|0?[1-9])\d(\d\d[0-9Xx])?$/,
};
