import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {DrivenformComponent} from './drivenform/drivenform.component';

const routes: Routes = [

    {
        path: '',
        component: DrivenformComponent
    },
    {
        path: 'form',

        component: ReactiveformComponent
    },
    {
        path: 'profile',
        component: ProfileEditorComponent
    },

    {
        path: 'drivenform',
        component: DrivenformComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
