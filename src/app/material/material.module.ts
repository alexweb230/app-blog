import {NgModule} from '@angular/core';
import {MatButtonModule, MatButtonToggleModule, MatIconModule, MatTabsModule} from '@angular/material';

const MaterialComponents = [
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule
];

@NgModule({
    declarations: [],
    imports: [
        MaterialComponents
    ],
    exports: [
        MaterialComponents
    ]
})
export class MaterialModule {
}
