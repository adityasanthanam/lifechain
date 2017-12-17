/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.RegulatoryPublicDataTransaction} tx The sample transaction instance.
 * @transaction
 */

function RegulatoryPublicDataTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.RegulatoryPublicData')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }
/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.RegulatoryPrivateDataTransaction} tx The sample transaction instance.
 * @transaction
 */

function RegulatoryPrivateDataTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.RegulatoryPrivateData')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }


/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.EmployeePublicDataTransaction} tx The sample transaction instance.
 * @transaction
 */

function EmployeePublicDataTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.EmployeePublicData')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }
/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.EmployeePrivateDataTransaction} tx The sample transaction instance.
 * @transaction
 */

function EmployeePrivateDataTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.EmployeePrivateData')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }

/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.EmployerPublicDataTransaction} tx The sample transaction instance.
 * @transaction
 */

function EmployerPublicDataTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.EmployerPublicData')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }
/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.EmployerPrivateDataTransaction} tx The sample transaction instance.
 * @transaction
 */

function EmployerPrivateDataTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.EmployerPrivateData')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }
/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.EmployerProjectTransaction} tx The sample transaction instance.
 * @transaction
 */

function EmployerProjectTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.EmployerProject')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }
/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.EmployerJobpostTransaction} tx The sample transaction instance.
 * @transaction
 */

function EmployerJobpostTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.EmployerJobpost')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }
/**
 * Sample transaction processor function.
 * @param {org.blockchain.network.EmployeeJobpostTransaction} tx The sample transaction instance.
 * @transaction
 */

function EmployeeJobpostTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.data;

    // Update the asset with the new value.
    tx.asset.data = tx.newdata;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.blockchain.network.EmployeeJobpost')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        }