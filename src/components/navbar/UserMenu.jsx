
import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function UserMenu() {
    const toast = useRef(null);
    
    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'Vendors',
                    icon: 'pi pi-angle-down'
                },
                {
                    label: 'Blog',
                    icon: 'pi-book'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Vendor LogIn',
                    icon: 'pi pi-sign-in'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
    <div className="card flex justify-content-center ">
            
        <Toast ref={toast} />
        <Menu model={items} />
        
    </div>
    )
}
        