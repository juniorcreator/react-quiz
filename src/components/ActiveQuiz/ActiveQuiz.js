import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import './ActiveQuiz.scss';

const ActiveQuiz = props => {

	return (
		<div className="ActiveQuiz">
			<p className="ActiveQuiz__uestion">
				<span>
					<strong>{props.askNumber}. &nbsp;</strong>
					{props.question}
				</span>
				<span>{props.askNumber} из {props.quizLength} </span>
			</p>
			<AnswersList 
			answers={props.answers} 
			onAnswerClick={props.onAnswerClick}
			/>
		</div>
		)
}

export default ActiveQuiz;