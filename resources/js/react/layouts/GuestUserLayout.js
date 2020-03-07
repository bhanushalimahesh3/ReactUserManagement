import React, {Component} from 'react';

export default function GuestUserLayout({page: Page, title}) {
    console.dir(Page);
    return (
        <div>
            <h1>Guest Layout</h1>
            <h2>{title}</h2>
           {Page}
        </div>
    );
}