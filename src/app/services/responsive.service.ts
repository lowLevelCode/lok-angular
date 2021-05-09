import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class ResponsiveService {
    constructor(private readonly _breakpointObserver: BreakpointObserver) { }
    
    getMobileSizeState():Observable<BreakpointState>{
        return this._breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]);
    }
}