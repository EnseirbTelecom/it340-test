// This example requires the use of a test double for InvoiceIo.

/**
 * Requirement: Low value invoices

 * The program must return all the issued invoices with values smaller than 100.
 * The collection of invoices can be found in a json file.
 */

class InvoiceFilter {
  constructor(invoiceIo) {
    this.invoiceIo = invoiceIo;
  }

  lowValueInvoices () {
    return this.invoiceIo.invoices().filter(invoice => invoice.value < 100)
  }
}

class InvoiceIo {
  constructor() {
    this.invoices = require('./invoices.json') // Missing file
  }

  invoices() {
    return this.invoices
  }
}

class Invoice {
  constructor(description, value) {
    this.description = description;
    this.value = value;
  }
}

module.exports.InvoiceFilter = InvoiceFilter
module.exports.InvoiceIo = InvoiceIo
