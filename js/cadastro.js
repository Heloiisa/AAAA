Vue.component('cadastroc', {
    data:{

    },
    template:
    `
    `
    });

    Vue.component('cadastro1c', {
    template:
    `
    `
    });


Vue.component('cadastro2c', {
    template:
    `<div class="mt4">
    <div id="cadastro2" class="columns is-desktop">
        <div class="column is-10-touch is-offset-1-touch is-4-desktop is-offset-2-desktop flexd">
            <titulocadastro title="Declaração de residência" subtitle="Preencha os campos para prosseguir."></titulocadastro>
            <form class="form-horizontal mt3">
                <inputc label="CEP*"></inputc>
                <inputc label="Endereço*"></inputc>
                <inputc label="Número*"></inputc>
                <inputc label="Complemento"></inputc>
                <!-- Select Basic -->
                <div class="field">
                    <label class="label" for="selectbasic-0">Estado*</label>
                    <div class="control">
                        <div class="select">
                            <select id="selectbasic-0" name="selectbasic-0" class="">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                <inputc label="Cidade*"></inputc>
                <inputc label="Bairro*"></inputc>
                <!-- Select Basic -->
                <div class="field">
                    <label class="label" for="selectbasic-2">Nacionalidade</label>
                    <div class="control">
                        <div class="select">
                            <select id="selectbasic-2" name="selectbasic-2" class="">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- Select Basic -->
                <div class="field">
                    <label class="label" for="selectbasic-1">Estado de nascimento*</label>
                    <div class="control">
                        <div class="select">
                            <select id="selectbasic-1" name="selectbasic-1" class="">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                <inputc label="Cidade de nascimento*"></inputc>
            </form>
        </div>
    </div>
</div>`
});

Vue.component('cadastro3c', {
    template:
    `<div class="mt4">
    <div id="cadastro3" class="columns is-desktop">
        <div class="column is-10-touch is-offset-1-touch is-4-desktop is-offset-2-desktop flexd">
            <titulocadastro title="Ocupação profissional" subtitle="Preencha os campos para prosseguir."></titulocadastro>
            <form class="form-horizontal mt3">
                <inputc label="Ocupação profissional*"></inputc>
                <div class="field">
                    <input id="switchExample" type="checkbox" name="switchExample" class="switch is-info" checked="checked">
                    <label for="switchExample">Estou trabalhando atualmente</label>
                </div>
                <inputc label="Nome da empresa*"></inputc>
                <inputc label="Endereço comercial*"></inputc>
                <inputc label="Número*"></inputc>
                <inputc label="Bairro*"></inputc>
                <!-- Select Basic -->
                <div class="field">
                    <label class="label" for="selectbasic-1">Estado*</label>
                    <div class="control">
                        <div class="select">
                            <select id="selectbasic-1" name="selectbasic-1" class="">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                <inputc label="Cidade*"></inputc>
                <inputc label="CEP*"></inputc>
                <!-- Select Basic -->
                <div class="field">
                    <label class="label" for="selectbasic-0">Como nos conheceu</label>
                    <div class="control">
                        <div class="select">
                            <select id="selectbasic-0" name="selectbasic-0" class="">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>`
});

Vue.component('cadastro4c', {
    template:
    `<div class="mt4">
    <div id="cadastro4" class="columns is-desktop">
        <div class="column is-10-touch is-offset-1-touch is-4-desktop is-offset-2-desktop flexd">
            <titulocadastro title="Dados bancários" subtitle="Preencha os campos para concluir o cadastro."></titulocadastro>
            <notificationc class="mt3" text="As contas IEPTB são abertas GRATUITAMENTE. Os campos abaixo são necessários apenas para futuros resgates deos seus investimentos."></notificationc>
            <form class="form-horizontal mt3">
                <!-- Select Basic -->
                <div class="field">
                    <label class="label" for="selectbasic-1">Banco*</label>
                    <div class="control">
                        <div class="select">
                            <select id="selectbasic-1" name="selectbasic-1" class="">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- Select Basic -->
                <div class="field">
                    <label class="label" for="selectbasic-0">Tipo de conta</label>
                    <div class="control">
                        <div class="select">
                            <select id="selectbasic-0" name="selectbasic-0" class="">
                                <option>Option one</option>
                                <option>Option two</option>
                            </select>
                        </div>
                    </div>
                </div>
                <inputc label="Agência (Sem o digito)*"></inputc>
                <inputc label="Conta Corrente*"></inputc>
                <inputc label="Digito*"></inputc>
                <inputc label="Renda mensal*"></inputc>
                <inputc label="Aplic. Financeiras*"></inputc>
                <inputc label="Outros rendimentos"></inputc>
                <inputc label="Bens móveis"></inputc>
                <div class="columns">
                    <div class="column">
                        <!-- Multiple Checkboxes -->
                        <div class="field mt3">
                            <div class="control">
                                <label class="label" for="textinput-2">Qual a origem dos recursos que você vai investir?*</label>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox19" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox19">Rendimentos oriundos da ocupação profissional</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox20" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox20">Herança</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox30" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox30">Doação</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox40" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox40">Partilha de bens (Divórcio)</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox50" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox50">Aposentadoria</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox60" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox60">Aluguel de propriedades</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox70" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox70">Outros</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <!-- Multiple Checkboxes -->
                        <div class="field mt3">
                            <div class="control">
                                <label class="label" for="textinput-2">Em quais áreas você pretende investir no IEPTB?</label>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox42" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox42">Investimentos em renda fixa</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox31" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox31">Investimentos em renda variável</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox32" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox32">Derivativos</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox33" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox33">Fundos de investimentos</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox34" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox34">Câmbio</label>
                                </div>
                                <div class="checkradio100 mt1">
                                    <input class="is-checkradio is-info" id="exampleCheckbox35" type="checkbox" name="exampleCheckbox">
                                    <label for="exampleCheckbox35">Outros</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <label class="label" for="">* Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
                <label class="label" for="">* Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat excepturi fuga suscipit libero doloremque.</label>
            </form>
        </div>
    </div>
</div>`
});
