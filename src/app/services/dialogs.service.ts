import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

export enum DialogIcon {
    WARNING = 'warning',
}

@Injectable()
export class SweetAlertService {

    confirmDelete(title:string):Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'warning',
            title,      
            showCancelButton: true,
            confirmButtonText: `Eliminar`,
            cancelButtonText : `Cancelar`,
            reverseButtons: true 
          });
    }

    success(content: string):Promise<SweetAlertResult>{
        return Swal.fire(content, '', 'success');
    }
}