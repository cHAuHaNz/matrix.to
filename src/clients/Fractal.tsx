/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';

import { TextClient, Maturity, ClientKind, ClientId, Platform } from './types';

import { LinkKind } from '../parser/types';

import logo from '../imgs/fractal.png';

const Fractal: TextClient = {
    kind: ClientKind.TEXT_CLIENT,
    name: 'Fractal',
    logo: logo,
    author: 'Daniel Garcia Moreno',
    homepage: 'https://github.com/poljar/weechat-matrix',
    maturity: Maturity.BETA,
    experimental: false,
    platforms: [Platform.Desktop],
    clientId: ClientId.Fractal,
    toInviteString: (link) => {
        switch (link.kind) {
            case LinkKind.Alias:
            case LinkKind.RoomId:
            case LinkKind.UserId:
                return (
                    <span>
                        Click the '+' button in the top right and paste the
                        identifier
                    </span>
                );
            default:
                return <span>Fractal doesn't support this kind of link</span>;
        }
    },
    copyString: (link) => {
        switch (link.kind) {
            case LinkKind.Alias:
            case LinkKind.RoomId:
            case LinkKind.UserId:
                return `${link.identifier}`;
            default:
                return '';
        }
    },
    linkSupport: (link) => {
        switch (link.kind) {
            case LinkKind.Alias:
            case LinkKind.RoomId:
            case LinkKind.UserId:
                return true;
            default:
                return false;
        }
    },

    description: 'Fractal is a Matrix Client written in Rust',
};

export default Fractal;
