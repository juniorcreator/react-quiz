import React, {Component} from 'react';
import ActiveQuiz from  '../../components/ActiveQuiz/ActiveQuiz';
import './Quiz.scss';

export default class Quiz extends Component {
state = {
	askNumber: 0,
	quiz: [
		{
			id: 1,
			question: 'Колір неба?',
			rightAnswer: 3,
			answers: [
				{text: 'Чорне', id: 1},
				{text: 'Червоне', id: 2},
				{text: 'Голубе', id: 3},
				{text: 'Зелене', id: 4}
			]
		},
		{
			id: 2,
			question: 'Як мене звати?',
			rightAnswer: 2,
			answers: [
				{text: 'Ігор', id: 1},
				{text: 'Сергій', id: 2},
				{text: 'Вова', id: 3},
				{text: 'Влад', id: 4}
			]
		},
		{
			id: 3,
			question: 'Форма землі?',
			rightAnswer: 1,
			answers: [
				{text: 'Кругла', id: 1},
				{text: 'Плоска', id: 2},
				{text: 'Квадратка', id: 3},
				{text: 'Овальна', id: 4}
			]
		},
	]
}

onAnswerClick = (index) => {
	console.log(index);

const answerId = this.state.quiz[this.state.askNumber];

if(answerId.rightAnswer === index) {
	this.setState({
		askNumber: this.state.askNumber + 1
	})
}else {
	
}
	
}
	render() {

		return (
			<div className="Quiz">
				
				<div className="Quiz__wrapper">
					<h1>Answer all the uestion </h1>
					<ActiveQuiz 
					answers={this.state.quiz[this.state.askNumber].answers}
					question={this.state.quiz[this.state.askNumber].question}
					onAnswerClick={this.onAnswerClick}
					quizLength={this.state.quiz.length}
					askNumber={this.state.askNumber + 1} 
					/>
				</div>
			</div>
			)
	}
}