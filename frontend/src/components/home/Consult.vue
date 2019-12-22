<template>
    <div class="consult-admin">
        <h1>Consultar CPF</h1>
        <b-table hover striped @click="selectedCustomer" :items="customer" :fields="fields">
            
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'Consul',
    data: function() {
        return {
            customer: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: ':Nome', sortable: true },
                { key: 'address', label: 'Endereço', sortable: true },
                { key: 'cpf', label: 'CPF', sortable: true},
                { key: 'age', label: 'Idade' }
            ]
        }
    },
    methods: {
        loadCustomer() {
            const url = `${baseApiUrl}/client_analysis`
            axios.get(url).then(res => {
                this.customer = res.data
            })
        },
        selectedCustomer() {
            console.log("Aqui")
        }
    },
    mounted() {
        this.loadCustomer()
    }
}
</script>

<style>
    
</style>