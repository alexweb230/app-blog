import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
    declarations: [ReactiveformComponent, ProfileEditorComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        ReactiveFormsModule
    ]
})
export class MainModule {
}
