import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';

const routes: Routes = [

    {
        path: '',
        component: ReactiveformComponent
    },
    {
        path: 'form',

        component: ReactiveformComponent
    },
    {
        path: 'profile',
        component: ProfileEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
