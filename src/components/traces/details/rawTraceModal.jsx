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
import {observer} from 'mobx-react';
import Loading from '../../common/loading';
import Error from '../../common/error';

import Modal from '../../common/modal';

@observer
export default class RawTraceModal extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired,
        traceId: PropTypes.string.isRequired,
        rawTraceStore: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            this.props.rawTraceStore.fetchRawTrace(this.props.traceId);
        }
    }

    render() {
        const {isOpen, closeModal, rawTraceStore, traceId} = this.props;

        return (
            <Modal isOpen={isOpen} closeModal={closeModal} title={`Raw Trace: ${traceId}`}>
                <div>
                    {
                        rawTraceStore.promiseState &&
                        rawTraceStore.promiseState.case({
                            pending: () => <Loading />,
                            rejected: () => <Error />,
                            fulfilled: () => {
                                if (rawTraceStore.rawTrace) {
                                    return <pre>{JSON.stringify(rawTraceStore.rawTrace, null, 2)}</pre>;
                                }

                                return <Error />;
                            }
                        })
                    }
                </div>
            </Modal>);
    }
}
