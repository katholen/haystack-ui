/*
 * Copyright 2018 Expedia, Inc.
 *
 *         Licensed under the Apache License, Version 2.0 (the 'License');
 *         you may not use this file except in compliance with the License.
 *         You may obtain a copy of the License at
 *
 *             http://www.apache.org/licenses/LICENSE-2.0
 *
 *         Unless required by applicable law or agreed to in writing, software
 *         distributed under the License is distributed on an 'AS IS' BASIS,
 *         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *         See the License for the specific language governing permissions and
 *         limitations under the License.
 */

const Q = require('q');

const connector = {};

const serviceGraph = [
    [
        {
            source: 'stark-service',
            destination: 'baratheon-service',
            operation: 'baratheon-1',
            count: 421
        },
        {
            source: 'stark-service',
            destination: 'grayjoy-service',
            operation: 'grayjoy-1',
            count: 210
        },
        {
            source: 'baratheon-service',
            destination: 'lannister-service',
            operation: 'lannister-1',
            count: 102
        },
        {
            source: 'baratheon-service',
            destination: 'clegane-service',
            operation: 'clegane-1',
            count: 401
        },
        {
            source: 'lannister-service',
            destination: 'tyrell-service',
            operation: 'tyrell-1',
            count: 30
        },
        {
            source: 'tyrell-service',
            destination: 'targaryen-service',
            operation: 'targaryen-1',
            count: 50
        },
        {
            source: 'tyrell-service',
            destination: 'tully-service',
            operation: 'tully-1',
            count: 121
        },
        {
            source: 'targaryen-service',
            destination: 'dragon-service',
            operation: 'dragon-1',
            count: 190
        },
        {
            source: 'targaryen-service',
            destination: 'drogo-service',
            operation: 'drogo-1',
            count: 98
        },
        {
            source: 'targaryen-service',
            destination: 'mormont-service',
            operation: 'mormont-1',
            count: 5
        }
    ]
];

connector.getServiceGraph = () => Q.fcall(() => serviceGraph);

module.exports = connector;
