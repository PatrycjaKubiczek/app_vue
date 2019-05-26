<template>
	<div class="container">
		<!--main list-->
		<p class="mb-0">Tasks</p>
		<div class="row d-flex align-items-center justify-content-center ">
			<div class="card col-md-4 task__card">  
				<div class="task__body">
					<draggable :list="taskList" group="tasks" @end="updateTask" class="task__list" tag="ul">
						<li v-for="(task, index) in taskList" :key="index"  class="task__item">
							{{task.title}}
						</li>
					</draggable>
				</div>
			</div>
		</div>

		<!--users lists-->
		<div class="row d-flex align-items-start">
			<div class="col-md-4 card order-md-2 task__card user__first">
				<p class="card-title">User 1</p>
				<div class="card-body task__body">
					<draggable :list="User1" group="tasks" tag="ul" class="task__list">
						<li v-for="(task, index) in User1" :key="index"   class="task__item">{{task.title}}</li>
					</draggable>
					<span class="user__number">1</span>
				</div>
			</div>

			<div class="col-md-4 card order-md-1 task__card user__second">
				<p class="card-title">User 2</p>
				<div class="card-body task__body">
					<draggable :list="User2" group="tasks" tag="ul" class="task__list">
						<li v-for="(task, index) in User2" :key="index" class="task__item">{{task.title}}</li>
					</draggable>
					<span class="user__number">2</span>
				</div>
			</div>

			<div class="col-md-4 card order-md-3 task__card user__third">
				<p class="card-title">User 3</p>
				<div class="card-body task__body">
					<draggable :list="User3" group="tasks" tag="ul" class="task__list">
						<li v-for="(task, index) in User3" :key="index" class="task__item">{{task.title}}</li>
					</draggable>
					<span class="user__number">3</span>
				</div>	
			</div>

		</div>

	</div><!--end of .container -->

</template>

<script>
	import draggable from 'vuedraggable'

	export default {
		name: 'PodiumTask',
		components: {
			draggable,
		},
		data: function(){
			return {
				todos: null,
				taskList: [
				{
					id: 1,
					title: "Task 1",
					taskAssigned: false,
					userAssigned: null
				},
				{
					id: 2,
					title: "Task 2",
					taskAssigned: false,
					userAssigned: null
				},
				{
					id: 3,
					title: "Task 3",
					taskAssigned: false,
					userAssigned: null
				},
				{
					id: 4,
					title: "Task 4",
					taskAssigned: false,
					userAssigned: null
				},
				{
					id: 5,
					title: "Task 5",
					taskAssigned: true,
					userAssigned: 'User1'
				},
				{
					id: 6,
					title: "Task 6",
					taskAssigned: true,
					userAssigned: 'User2'
				},
				],
				User1: [
				{
					id: 7,
					title: "Task 7",
					taskAssigned: true,
					userAssigned: 'User2'
				},
				{
					id: 8,
					title: "Task 8"
				},
				{
					id: 9,
					title: "Task 9"
				},
				],
				User2: [
				{
					id: 10,
					title: "Task 10"
				},
				],
				User3: [
				{
					id: 11,
					title: "Task 11"
				},
				
				
				],
			}
		},
		firestore: {
			// todos: db.collection('tasks').orderBy('title'),
		},
		mounted(){
			// console.log('App mounted!');
			// if (localStorage.getItem('taskList')) {
			// 	this.taskList = JSON.parse(localStorage.getItem('taskList'));
			// }
		},
		watch: {
			todos: {
				handler() { 
				// 	// console.log('Todos changed!'); 
				},
				deep: true,
				immediate: true
			},
		},
		methods: {
			updateTask(){
				// let parsed = JSON.stringify(this.taskList);
				// localStorage.setItem('taskList', parsed);
			}
		}
	}
</script>

<style scoped lang="scss">
ul {
	list-style-type: none;
	padding: 0;
}
.card-title {
	margin-bottom: 0;
}
.task__card {
	border: 10px solid #fff;
	padding: 0;
}
.task__body {
	position: relative;
	padding: 10px;
	background-color: #343a40;
	color: #fff;
}
.task__list {
	min-height: 250px;
}
.task__item {
	display: block;
	width: 70%;
	margin: 0 auto;
	padding: 0 10px;
	border: 1px solid transparent;
	transition: background .25s ease-in-out, border .25s ease-in-out;
	&:hover {
		cursor: move;
		border: 1px solid #ddd;
		background-color: #222;
	}
}
.user__number{
	position: absolute; 
	right: 2%; 
	bottom: 1%; 
	font-size: 4em;
	line-height: 1;
}
.user__second {
	margin-top: 10px
}
.user__third {
	margin-top: 20px
}
@media screen and (max-width: 992px) {
	.user__second, .user__third {
		margin-top: 0;
	}
}
</style>