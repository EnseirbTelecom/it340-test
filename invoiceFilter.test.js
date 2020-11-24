/* eslint-env jest */

const Invoice = require('./invoiceFilter.js')

test('Filter should only retain one invoice.', () => {
  const filter = new Invoice.InvoiceFilter()
  expect(filter.lowValueInvoices().length).toBe(1)
})
