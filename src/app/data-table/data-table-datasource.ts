import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


import {MatInputModule} from '@angular/material/input';




// TODO: Replace this with your own data model type
export interface DataTableItem {
  t1: number;
  t2: string;
  t3: string;
  t4: string;
  t5: string;
  t6: string;
  t7: string;

} 


// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {
      t1: 2721987,   
      t2: 'UAILK',    
      t3: "AS ARIES", 
      t4: 'ТОВ "ППЛ 33-35" - 38156292',   
      t5: '01.01.2017 01:01:01 \n 01.01.2017 01:01:01',      
      t6: '01.01.2017 01:01:01 \n 01.01.2017 01:01:01',
      t7: '01.01.2017 01:01:01',
  }, {
      t1: 2721986,
      t2: 'UAILK',
      t3: "AS ARIES",
      t4: 'ТОВ "ППЛ 33-35" - 38156292',
      t5: '02.01.2017 01:01:01 \n 01.01.2017 01:01:01',
      t6: '02.01.2017 01:01:01 \n 01.01.2017 01:01:01',
      t7: '02.01.2017 01:01:01',
  }, {
      t1: 2721985,
      t2: 'UAILK',
      t3: "AS ARIES",
      t4: 'ТОВ "ППЛ 33-35" - 38156292',
      t5: '03.01.2017 01:01:01 \n 01.01.2017 01:01:01',
      t6: '03.01.2017 01:01:01 \n 01.01.2017 01:01:01',
      t7: '03.01.2017 01:01:01',
  }, {
      t1: 2721984,
      t2: 'UAILK',
      t3: "AS ARIES",
      t4: 'ТОВ "ППЛ 33-35" - 38156292',
      t5: '04.01.2017 05:01:01 \n 01.01.2017 01:01:01',
      t6: '04.01.2017 05:01:01 \n 01.01.2017 01:01:01',
      t7: '0401.2017 05:01:01',
  },
 
    
    
 
   
 
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, 
              private sort: MatSort
             ) {
    super(); 
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 't3': return compare(a.t3, b.t3, isAsc); 
        case 't1': return compare(a.t1, b.t1, isAsc);
        case 't2': return compare(a.t2, b.t2, isAsc);
        case 't4': return compare(a.t4, b.t4, isAsc);
        case 't5': return compare(a.t5, b.t5, isAsc);
        case 't6': return compare(a.t6, b.t6, isAsc);
        case 't7': return compare(a.t7, b.t7, isAsc);
      
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
