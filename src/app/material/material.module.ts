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
import { MatCardModule } from '@angular/material'




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
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
