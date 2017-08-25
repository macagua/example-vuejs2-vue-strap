<template>
	<div class="mymodal">

		<modal title="Large Modal" large :show.sync="largeModal" width="80%">

		  <div slot="modal-header" class="modal-header">
		    <h4 class="modal-title">Vue.js FAQ</h4>
		  </div>

		  <div slot="modal-body" class="modal-body">

			<div id="puf">
			    <div class="question1">
			        <h3>Why doesn’t Vue.js support IE8?</h3>
			        <p>Vue.js is able to deliver the plain JavaScript object syntax without resorting to dirty checking by using Object.defineProperty, which is an ECMAScript 5 feature. It only works on DOM elements in IE8 and there’s no way to polyfill it for JavaScript objects.</p>
			    </div>

			    <div class="question2">
			        <h3>So Vue.js modifies my data?</h3>
			        <p>Yes and No. Vue.js only converts normal properties into getters and setters so it can get notified when the properties are accessed or changed. When serialized, your data will look exactly the same.</p>
			    </div>

			    <div class="question3">
			        <h3>What is the current status of Vue.js? Can I use it in production?</h3>
			        <p>Vue.js has gone through some API changes in the latest 0.12 release, but this is the last planned point release before 1.0. In the meanwhile, there already companies/projects using Vue.js in production.</p>
			    </div>

			    <div class="question4">
			        <h3>Is Vue.js free to use?</h3>
			        <p>Vue.js is free and fully open sourced under the MIT License.</p>
			    </div>

			    <div class="question5">
			        <h3>What makes Vue.js different from React?</h3>
			        <p>React and Vue.js do have some similarity in that they both provide reactive & composable View components. However the internal implementation is fundamentally different. React is built upon a virtual DOM - an in-memory representation of what the actual DOM should look like. Data in React is largely immutable and DOM manipulations are calculated via diffing. On the contrary data in Vue.js is mutable and stateful by default, and changes are triggered through events. Instead of a virtual DOM, Vue.js uses the actual DOM as the template and keeps references to actual nodes for data bindings.</p>
			    </div>

			</div>

			<div slot="modal-footer" class="modal-footer">
				<button type="button" class="btn btn-default" @click="largeModal = false">Exit</button>
			</div>

		  </div>

		</modal>

		<br><br>
		<h1>Bootstrap Modal example</h1>
		<br><br>
		<button class="btn btn-success btn-xs" @click="largeModal = true">View Example</button>
		<br><br>
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import {modal} from 'vue-strap/dist/vue-strap.js';
export default {
  name: 'mymodal',
  data: function(){
    return{
      largeModal : false
    }
  },
  components: {
    modal
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/******************************************************************************/
/*                           Open Sans Google Font                            */
/******************************************************************************/
@font-face {
    font-family: 'Open Sans Light';
    src: url('/static/fonts/Open_Sans/OpenSans-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans Bold';
    src: url('/static/fonts/Open_Sans/OpenSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

/******************************************************************************/
/*                             FAQ with colors                                */
/******************************************************************************/

#id {
	text-align: justify;
}

.puf-question {
    font-family: "Open Sans Bold";
}

.puf-anwer {
    font-family: "Open Sans Light";
}

.question1, .question2, .question3, .question4, .question5 {
    padding: .5em;
    border: .5em;
    border-left-style: solid;
    page-break-inside: avoid;
    margin: 1em auto;
    text-align: justify;
}


/** Question 1 ****************************************************************/

.question1 {
    border-color: #8677b3;
    background: #FFFFFF;
    counter-increment: question1;
    overflow: auto;
    clear: both;
}
.question1::before, .question1 > .marker {
    text-transform: uppercase;
    color: #827017;
    min-width: 7.5em;
    display: block;
}

/** Question 2 ****************************************************************/

.question2 {
    border-color: #e66693;
    background: #FFFFFF;
    counter-increment: question2;
    overflow: auto;
    clear: both;
}
.question2::before, .question2 > .marker {
    text-transform: uppercase;
    color: #827017;
    min-width: 7.5em;
    display: block;
}

/** Question 3 ****************************************************************/

.question3 {
    border-color: #E0CB52;
    background: #FFFFFF;
    counter-increment: question3;
    overflow: auto;
    clear: both;
}
.question3::before, .question3 > .marker {
    text-transform: uppercase;
    color: #827017;
    min-width: 7.5em;
    display: block;
}

/** Question 4 ****************************************************************/

.question4 {
    border-color: #28aae3;
    background: #FFFFFF;
    counter-increment: question4;
    overflow: auto;
    clear: both;
}
.question4::before, .question4 > .marker {
    text-transform: uppercase;
    color: #827017;
    min-width: 7.5em;
    display: block;
}

/** Question 5 ****************************************************************/

.question5 {
    border-color: #EA433F;
    background: #FFFFFF;
    counter-increment: question5;
    overflow: auto;
    clear: both;
}
.question5::before, .question5 > .marker {
    text-transform: uppercase;
    color: #827017;
    min-width: 7.5em;
    display: block;
}
</style>