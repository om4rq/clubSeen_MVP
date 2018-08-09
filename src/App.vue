<template>
  
    <div class="container-fluid" id="app">
       <div class="row">
        <div class="col-xs-12">
            <div style="float:right; margin-top:20px; margin-right: 15px">
                <input @keydown.enter="submit" v-model="inputAddress" placeholder="Enter club address" type="text">
            </div>
        </div>
       </div>
        <div class="row">
            <div class="col-xs-12 col-md-6 homePanel homePanelPic">
                <div id="clubPicCard">
                    <div class="overlay">
                        <div class="attributes">
                                <div class="middle">
                                        <div @click="decrease"class="roundL">
                                            <div id="cta">
                                                <span class="arrow primera prev"></span>
                                                <span class="arrow segunda prev"></span>
                                            </div>
                                        </div>
                                    <h1><a :href="club[counter].website" target="_blank">{{club[counter].name}}</a></h1>
                                        <div @click="increase" class="roundR">
                                            <div id="cta">
                                                <span class="arrow primera next"></span>
                                                <span class="arrow segunda next"></span>
                                            </div>
                                        </div>
                                </div>
                                <div class="top-left">
                                    <p>{{club[counter].rating}}</p>
                                </div>
                                <div class="top-right">
                                    <p>{{status()}}</p>
                                </div>
                                <div class="bottom-left">
                                    <p>Pop</p>
                                </div>
                                <div class="bottom-right">
                                    <p>{{dollar()}}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6 homePanel homePanelDes" style="#FEFEFD">
                <div id="desCard">
                    <div class="row desDetails">
                        <div class="col-xs-6 col-xs-offset-3">
                            <h1 class="text-center" id="clubName"><a :href="club[counter].website" target="_blank">{{club[counter].name}}</a></h1>
                            <p class="text-center">{{club[counter].phone}}</p>
                            <p class="text-center" id="address">{{club[counter].vicinity}}</p>
                        </div>
                    </div>
                    <div class="row" id="clubSeen_data">
                        <div class="col-xs-10 col-xs-offset-1">
                            <div class="row">
                                <div class="col-xs-3">
                                    <p>ClubScore</p>
                                </div>
                                <div class="col-xs-9">
                                    <div class="progress">
                                        <div id="serviceValue" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="5" :style="{width: average()/5*100+'%'}"><span class="sr-only">{{average()}}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div v-for="criteria in ratings[counter]" class="row">
                                <div>
                                    <div class="col-xs-3">
                                        <p>{{criteria.criteria}}</p>
                                    </div>
                                    <div class="col-xs-9">
                                        <div class="progress">
                                            <div id="serviceValue" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="5" :style="{width: criteria.value/5*100+'%'}"><span class="sr-only">{{criteria.value}}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div class="row" style="margin-top: 1.75em">
                        <div class="col-xs-10 col-xs-offset-1">
                            <div class="col-xs-3">
                                <p style="text-align: center; background-color: antiquewhite; padding-right: 5px; padding-left: 5px;  background-clip: content-box; height: 7em">Review<br>Profile<br>Image</p>
                            </div>
                            <button @click="increase">inc</button>
                            <button @click="decrease">Dec</button>
                            <p>{{counter+1}}</p>
                            <p>{{trt[0].club_name}}</p>
<!--                            <div class="col-xs-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro illo, temporibus sed! Qui.Lorem ipsum dolor sit amet, consectetur adipisicing.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, placeat... <a href="#">Read More</a></div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import db from './firebase/init.js'
    import ratingBar from './progressBar'
    var clubData = require('./clubData.js')




    //TODO:

    export default {
        name: 'app',
        components: {
            ratingBar
        },
        data() {
            return {
                inputAddress: null,
                trt: [],
                counter: 0,
                club: clubData.clubData,
                ratings: [
                    [{
                        criteria: 'Service',
                        value: 4.2
                    }, {
                        criteria: 'VIP',
                        value: 1.2
                    }, {
                        criteria: 'Drinks',
                        value: 4.2
                    }, {
                        criteria: 'Safety',
                        value: 4.1
                    }, {
                        criteria: 'Wifi',
                        value: 4.3
                    }],
                    [{
                        criteria: 'Service',
                        value: 3.2
                    }, {
                        criteria: 'VIP',
                        value: 3.2
                    }, {
                        criteria: 'Drinks',
                        value: 3.2
                    }, {
                        criteria: 'Safety',
                        value: 3.1
                    }, {
                        criteria: 'Wifi',
                        value: 3.3
                    }],
                    [{
                        criteria: 'Service',
                        value: 3.2
                    }, {
                        criteria: 'VIP',
                        value: 2.2
                    }, {
                        criteria: 'Drinks',
                        value: 3.2
                    }, {
                        criteria: 'Safety',
                        value: 4.1
                    }, {
                        criteria: 'Wifi',
                        value: 1.3
                    }],
                    [{
                        criteria: 'Service',
                        value: 4.6
                    }, {
                        criteria: 'VIP',
                        value: 1.5
                    }, {
                        criteria: 'Drinks',
                        value: 4.3
                    }, {
                        criteria: 'Safety',
                        value: 2.1
                    }, {
                        criteria: 'Wifi',
                        value: 3.9
                    }],
                    [{
                        criteria: 'Service',
                        value: 4.9
                    }, {
                        criteria: 'VIP',
                        value: 1.5
                    }, {
                        criteria: 'Drinks',
                        value: 4.7
                    }, {
                        criteria: 'Safety',
                        value: 4.7
                    }, {
                        criteria: 'Wifi',
                        value: 4.9
                    }],
                    [{
                        criteria: 'Service',
                        value: 2.2
                    }, {
                        criteria: 'VIP',
                        value: 2.2
                    }, {
                        criteria: 'Drinks',
                        value: 2.2
                    }, {
                        criteria: 'Safety',
                        value: 2.1
                    }, {
                        criteria: 'Wifi',
                        value: 4.3
                    }]
                ]

            };
        },
        methods: {
            average: function() {
                let values = this.ratings[this.counter].map((crit, i) => crit.value)
                let sum = values.reduce((a, b) => a + b, 0);
                let average = sum / values.length
                return average.toFixed(1);
            },
            increase: function() {
                this.counter <
                    clubData.clubData.length && this.counter++;
            },
            decrease: function() {
                if (this.counter > 0) {
                    this.counter--
                }
            },
            dollar: function() {
                let price = "$".repeat(this.club[this.counter].price)
                if (typeof this.club[this.counter].price == 'number') {
                    return price
                } else {
                    return "___"
                }
            },
            setLimit: function(service) {
                if (service.target.valueAsNumber <
                    0) {
                    service.target.valueAsNumber = 0;
                    this.service = service.target.valueAsNumber
                };
                if (service.target.valueAsNumber > 5) {
                    service.target.valueAsNumber = 5;
                    this.service = service.target.valueAsNumber
                };
            },
            status: function() {
                let clubStatus = false
                if (clubStatus === true) {
                    return 'Open'
                } else if (clubStatus === false) {
                    return 'Closed'
                } else {
                    return "Unkown"
                }
            },
            submit: function() {
                if (this.inputAddress) {
                    alert(this.inputAddress)
                }

            }
        },
        created() {
            //getch data drom the firestore
            db.collection('clubs').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        console.log(doc.data())
                        let datos = doc.data()
                        datos.id = doc.id
                        this.trt.push(datos)
                    })
                })
        }
    }




    export {
        counter
    }

</script>



<style>


</style>
