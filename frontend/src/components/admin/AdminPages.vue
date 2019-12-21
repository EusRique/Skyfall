<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema"
            sub="Cadastros & Cia" />
        
        <div class="admin-pages-tabs">
            <b-card no body>
                <b-tabs card>
                    <b-tab title="Consultar" active>
                        <ConsultAdmin />
                    </b-tab>
                    <b-tab title="Usuários">
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ConsultAdmin from './ConsultAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: { PageTitle, ConsultAdmin, UserAdmin }    
}
</script>