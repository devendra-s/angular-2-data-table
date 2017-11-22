export const HEADER_TEMPLATE = `
<div class="data-table-header">
    <h4 class="col-sm-8" [textContent]="dataTable.headerTitle"></h4>
    <div class="col-sm-4 no-padding" >
       <div class="input-group">
          <input type="text" name="searchStringInput" [ngModel]="searchString" (blur)="searchString = searchStringInput.value"
                       (keyup.enter)="searchString = searchStringInput.value" (keyup.esc)="searchStringInput.value = searchString" class="form-control input-sm" #searchStringInput placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" class="btn btn-flat btn-sm btn-default" (click)="dataTable.search()"><i class="fa fa-search"></i>
                </button>
                <button type="button" name="reset" class="btn btn-flat btn-sm btn-primary" (click)="dataTable.resetSearch()"><i class="fa fa-refresh"></i>
                </button>
              </span>
        </div>
    </div>
</div>
`;