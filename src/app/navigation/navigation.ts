import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'iam',
        title    : 'IAM',
        type     : 'group',
        children : [
            {
                id:'dashboard',
                title:'DashBoard',
                type:'item',
                icon:'dashboard',
                url:'/dashboard'
            },
            {
                id:'mail',
                title:'Mail',
                type:'item',
                icon:'email',
                url:'/mail'
            },
            {
                id       : 'users',
                title    : 'Users',
                type     : 'item',
                icon     : 'people',
                url      : '/users', 
            },
            {
                id       : 'groups',
                title    : 'Groups',
                type     : 'item',
                icon     : 'people',
                url      : '/groups', 
            },
            {
                id       : 'role',
                title    : 'Roles',
                type     : 'item',
                icon     : 'people',
                url      : '/role', 
            }
        ]
    },
   
];


