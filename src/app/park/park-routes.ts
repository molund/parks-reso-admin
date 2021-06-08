import { Routes } from '@angular/router';
import { FacilityFormComponent } from 'app/facility-form/facility-form.component';
import { FacilityRoutes } from 'app/facility/facility-routes';
import { FacilityComponent } from 'app/facility/facility.component';
import { ParkFormComponent } from 'app/park-form/park-form.component';
import { ParkDetailsComponent } from './park-details/park-details.component';

export const ParkRoutes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full'
  },
  {
    path: 'details',
    component: ParkDetailsComponent,
    data: {
      breadcrumb: 'Park Details',
      module: 'park',
      component: 'details'
    }
  },
  {
    path: 'edit',
    component: ParkFormComponent,
    data: {
      breadcrumb: 'Edit Park',
      module: 'park',
      component: 'edit'
    }
  },
  {
    path: 'facility/add',
    component: FacilityFormComponent,
    data: {
      breadcrumb: 'Add Facility',
      module: 'facility',
      component: 'add'
    }
  },
  {
    path: 'facility/:facilityId',
    component: FacilityComponent,
    data: {
      breadcrumb: 'NAME OF THE Facility'
    },
    children: FacilityRoutes
  }
];
