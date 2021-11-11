import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
    return (
        <>
            <table id="CourseList">
                <thead>
                    <CourseListRow textFirstCell="Available courses" isHeader={ true } />
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={ true } />
                </thead>
                <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" />
                ) : (
                listCourses.map((course) => (
                    <CourseListRow
                        key={ course.id }
                        textFirstCell={ course.name }
                        textSecondCell={ course.credit }
                    />
                    ))
                )}
                </tbody>
            </table>
        </>
    );
}

// propType listcourses takes an array of the courseShape
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

// listCourses is an empty array by default
CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;