/*
 * Copyright 2018 Expedia, Inc.
 *
 *         Licensed under the Apache License, Version 2.0 (the "License");
 *         you may not use this file except in compliance with the License.
 *         You may obtain a copy of the License at
 *
 *             http://www.apache.org/licenses/LICENSE-2.0
 *
 *         Unless required by applicable law or agreed to in writing, software
 *         distributed under the License is distributed on an "AS IS" BASIS,
 *         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *         See the License for the specific language governing permissions and
 *         limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Loading from '../common/loading';
import AlertTabs from './alertTabs';
import AlertsToolbar from './alertsToolbar';
import Error from '../common/error';

@observer
export default class AlertsPanel extends React.Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        alertsStore: PropTypes.object.isRequired,
        serviceName: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired,
        defaultPreset: PropTypes.object.isRequired,
        isUniversalSearch: PropTypes.bool.isRequired
    };

    render() {
        return (
            <section className="alert-results">
                <AlertsToolbar
                    defaultPreset={this.props.defaultPreset}
                    history={this.props.history}
                    alertsStore={this.props.alertsStore}
                    location={this.props.location}
                    serviceName={this.props.serviceName}
                    isUniversalSearch={this.props.isUniversalSearch}
                />
                { this.props.alertsStore.promiseState && this.props.alertsStore.promiseState.case({
                    pending: () => <Loading />,
                    rejected: () => <Error />,
                    fulfilled: () => ((this.props.alertsStore.alerts && this.props.alertsStore.alerts.length)
                        ? <AlertTabs history={this.props.history} alertsStore={this.props.alertsStore} location={this.props.location} serviceName={this.props.serviceName} isUniversalSearch={this.props.isUniversalSearch}/>
                        : <Error />)
                })}
            </section>
        );
    }
}
