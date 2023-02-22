import React from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './ViewStudent.css';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';

function ViewStudent() {

    const { studentList } = useSelector((state) => state.CreateStuReducer);

    return (
        <Container>
            <Table className='my-5' bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map((stu) => {
                            return (
                                <>
                                    <tr>
                                        <td rowSpan="2">
                                            {stu.id}
                                        </td>
                                        <td rowSpan="2">
                                            {
                                                `${stu.fName} ${stu.fName}`
                                            }
                                        </td>
                                        <td>
                                            {stu.sContact}
                                        </td>
                                        <td rowSpan="2" >
                                            {stu.email}
                                        </td>
                                        <td rowSpan="2">
                                            {stu.address}
                                        </td>
                                        <td rowSpan="2">
                                            {stu.gender}
                                        </td>
                                        <td rowSpan="2">
                                            <div className='d-flex action'>
                                                <Button variant="info" className='rounded-0 text-white mx-1 px-4'>
                                                    <PencilSquare />
                                                    <span className='ps-2'>Edit</span>
                                                </Button>
                                                <Button variant="danger" className='rounded-0 mx-1 px-4'>
                                                    <Trash3Fill />
                                                    <span className='ps-2'>Delete</span>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {stu.pContact}
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default ViewStudent
