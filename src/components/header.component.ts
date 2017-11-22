import { Component, Inject, forwardRef } from '@angular/core';
import { DataTable } from './table.component';
import { HEADER_TEMPLATE } from './header.template';
import { HEADER_STYLE } from "./header.style";


@Component({
    moduleId: module.id,
  selector: 'data-table-header',
  template: HEADER_TEMPLATE,
  styles: [HEADER_STYLE],
  host: {
    '(document:click)': '_closeSelector()'
  }
})
export class DataTableHeader {

    columnSelectorOpen = false;

    _closeSelector() {
        this.columnSelectorOpen = false;
    }

    constructor(@Inject(forwardRef(() => DataTable)) public dataTable: DataTable) {}

     get searchString() {
        return this.dataTable.searchString;
    }

    set searchString(value) {
        this.dataTable.searchString = String(<any>value); // TODO better way to handle that value of number <input> is string?
    }
}
