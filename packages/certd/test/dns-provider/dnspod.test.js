import pkg from 'chai'
import options from '../options.js'
import DnspodDnsProvider from '../../src/dns-provider/impl/dnspod.js'
import { Certd } from '../../src/index.js'
const { expect } = pkg
describe('DnspodDnsProvider', function () {
  it('#getDomainList', async function () {
    const dnsProvider = new DnspodDnsProvider(options.accessProviders.dnspod)
    const domainList = await dnsProvider.getDomainList()
    console.log('domainList', domainList)
    expect(domainList.length).gt(0)
  })

  it('#createRecord&removeRecord', async function () {
    const dnsProvider = new DnspodDnsProvider(options.accessProviders.dnspod)
    const record = await dnsProvider.createRecord({ fullRecord: '___certd___.__test__.certd.xyz', type: 'TXT', value: 'aaaa' })
    console.log('recordId', record.id)
    expect(record.id != null).ok

    await dnsProvider.removeRecord({ fullRecord: '___certd___.__test__.certd.xyz', type: 'TXT', value: 'aaaa', record })
  })

  it('#申请证书', async function () {
    this.timeout(300000)
    options.cert.domains = ['*.certd.xyz', 'certd.xyz']
    options.cert.dnsProvider = 'dnspod'
    options.args = { forceCert: true }
    const certd = new Certd()
    const cert = await certd.certApply(options)
    expect(cert).ok
    expect(cert.crt).ok
    expect(cert.key).ok
    expect(cert.detail).ok
    expect(cert.expires).ok
  })
})