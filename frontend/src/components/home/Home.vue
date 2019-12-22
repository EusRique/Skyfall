<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Analise de Crédito" />

        <div class="admin-pages-tabs">
            <b-card no body>
                <b-tabs card>
                    <b-tab title="Estatística" active>
                        <div class="stats">
                            <Stat title="Usuários Sistema" :value="stat.users"
                                icon="fa fa-users" color="#3282cd" />
                        </div>
                    </b-tab>
                    <b-tab title="Consultar CPF">
                        <Consult />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import Consult from './Consult'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { PageTitle, Stat, Consult },
    
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>