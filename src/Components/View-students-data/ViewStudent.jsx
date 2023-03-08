import React from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './ViewStudent.css';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import { DeleteStuAction, GetInfoAction } from '../../Services/Actions/CreateStu.action';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

function ViewStudent({ handleEdit }) {

    const { studentList } = useSelector((state) => state.CreateStuReducer);
    const { isLoading } = useSelector((state) => state.CreateStuReducer);

    console.log(isLoading, "isloading");

    const dispatch = useDispatch();

    const handleUpdate = (id) => {
        handleEdit();
        dispatch(GetInfoAction(id))
    }

    const studata = (studentList) => {
        return (
            <>
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
                            studentList.map((stu, index) => {
                                return (
                                    <>
                                        <tr key={index}>
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
                                                    <Button variant="info" className='rounded-0 text-white mx-1 px-4' onClick={() => { handleUpdate(stu.id) }}>
                                                        <PencilSquare />
                                                        <span className='ps-2'>Edit</span>
                                                    </Button>
                                                    <Button variant="danger" onClick={() => dispatch(DeleteStuAction(stu.id))} className='rounded-0 mx-1 px-4'>
                                                        <Trash3Fill />
                                                        <span className='ps-2'>Delete</span>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr key={index}>
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
            </>
        )
    }

    const skeleton = (studentList) => {

        return (
            <>
                <Table className='my-5' bordered hover>
                    <thead>
                        <tr>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                            <th><Skeleton /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map((stu,index) => {
                                return (
                                    <>
                                        <tr key={index} className='w-100'>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2"><Skeleton /></td>
                                            <td rowSpan="2">
                                                <div className='d-flex action'>
                                                    <div className='w-50 me-2'>
                                                        <Skeleton />
                                                    </div>
                                                    <div className='w-50'>
                                                        <Skeleton />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr key={index}>
                                            <td><Skeleton /></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </>
        )
    }

    return (
        <Container>
            {
                isLoading ? skeleton(studentList) : studata(studentList)
            }
        </Container>
    )
}

export default ViewStudent
