import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material'
import { MatButtonToggleModule } from '@angular/material'
import { MatIconModule } from '@angular/material'
import { MatProgressSpinnerModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material'
import { MatSidenavModule } from '@angular/material'
import { MatMenuModule } from '@angular/material'
import { MatListModule } from '@angular/material'
import { MatDividerModule } from '@angular/material'
import { MatGridListModule } from '@angular/material'
import { MatExpansionModule } from '@angular/material'
import { MatTabsModule } from '@angular/material'
import { MatCardModule } from '@angular/material'
import { MatStepperModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'
import { MatInputModule } from '@angular/material'
import { MatSelectModule } from '@angular/material'
import { MatAutocompleteModule } from '@angular/material'
import { MatCheckboxModule } from '@angular/material'
import { MatRadioModule } from '@angular/material'
import { MatDatepickerModule } from '@angular/material'
import { MatNativeDateModule } from '@angular/material'
import { MatTooltipModule } from '@angular/material'
import { MatSnackBarModule } from '@angular/material'










import { MatBadgeModule } from '@angular/material/badge'



const material =[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
