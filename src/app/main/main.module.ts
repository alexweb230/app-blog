import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { DrivenformComponent } from './drivenform/drivenform.component';

@NgModule({
    declarations: [ReactiveformComponent, ProfileEditorComponent, DrivenformComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class MainModule {
}
