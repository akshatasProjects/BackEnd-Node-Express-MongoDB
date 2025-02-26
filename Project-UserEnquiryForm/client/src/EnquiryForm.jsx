import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Table,
  DrawerItems,
  TableRow,
} from "flowbite-react";

export default function EnquiryForm() {
  let [enquiryList, setEnquiryList] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    _id: "",
  });

  let saveEnquiry = (e) => {
    e.preventDefault();

    // let formData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value,
    // };

    if (formData._id) {
      // Update
      axios
        .put(
          `http://localhost:8020/api/website/enquiry/update/${formData._id}`,
          formData
        )
        .then((res) => {
          toast.success("Enquiry Updated Successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            _id: "",
          });
          getAllenquiry();
        });
    } else {
      axios
        .post(`http://localhost:8020/api/website/enquiry/insert`, formData)
        .then((res) => {
          console.log(res.data);
          toast.success("Enquiry Saved Successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          getAllenquiry();
        });
    }
  };

  let getAllenquiry = () => {
    axios
      .get(`http://localhost:8020/api/website/enquiry/view`)
      .then((res) => {
        return res.data;
      })
      .then((finalData) => {
        if (finalData.status) {
          setEnquiryList(finalData.enquiryList);
        }
      });
  };

  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };

    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  useEffect(() => {
    getAllenquiry();
  }, []);

  return (
    <div>
      <ToastContainer />
      <h1 className='text-[40px] text-center py-6 font-bold'>
        User Enquiry Form
      </h1>

      <div className='grid grid-cols-[30%_auto]'>
        <div className='bg-gray-200 p-4'>
          <h2 className='text-[20px] font-bold'>Enquiry Form </h2>

          <form action='' onSubmit={saveEnquiry}>
            {/* {formData._id} */}
            {/* Name */}
            <div className='py-3'>
              <Label htmlFor='name' value='Your Name' />
              <TextInput
                type='text'
                value={formData.name}
                onChange={getValue}
                name='name'
                placeholder='Enter Your Name'
                required
              />
            </div>
            {/* Email */}
            <div className='py-3'>
              <Label htmlFor='email' value='Your Email' />
              <TextInput
                type='email'
                value={formData.email}
                onChange={getValue}
                name='email'
                placeholder='Enter Your Email'
                required
              />
            </div>
            {/* Phone */}
            <div className='py-3'>
              <Label htmlFor='phone' value='Your Phone' />
              <TextInput
                type='text'
                value={formData.phone}
                onChange={getValue}
                name='phone'
                placeholder='Enter Your phone'
                required
              />
            </div>
            <div className='py-3'>
              <Label htmlFor='phone' value='Your Phone' />
              <Textarea
                name='message'
                value={formData.message}
                onChange={getValue}
                placeholder='Enter your message...'
                required
                rows={4}
              />
            </div>
            <div className='py-3'>
              <Button type='submit' className='w-[100%]'>
                {formData._id ? "Update" : "Save"}
              </Button>
            </div>
          </form>
        </div>

        <EnquiryRight
          data={enquiryList}
          getAllenquiry={getAllenquiry}
          Swal={Swal}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

//------------------------------------ Right Table <EnquiryRight data={enquiryList} />---------------
// ------------------------DELETE BUTTON FUNCTION------------
function EnquiryRight({ data, getAllenquiry, Swal, setFormData }) {
  const deleteRow = (del_id) => {
    Swal.fire({
      title: "Do you want to Delete the data?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8020/api/website/enquiry/delete/${del_id}`)
          .then((res) => {
            toast.success("Enquiry Deleted Successfully");
            getAllenquiry();
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // ---------------------- EDIT BUTTON FUNCTION -----------------------

  let editRow = (rowID) => {
    axios
      .get(`http://localhost:8020/api/website/enquiry/editRow/${rowID}`)
      .then((res) => {
        let data = res.data;
        setFormData(data.enquiry);
      });
  };

  return (
    <div>
      {/* ---------------Right side ---------------------------- */}
      <div className='bg-gray-200 p-4 h-[100%] '>
        <h2 className='text-[20px] font-bold mb-4'>Enquiry List </h2>
        <div className='overflow-x-auto'>
          <Table>
            <Table.Head>
              <Table.HeadCell>Sr No</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>Message</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>

            <Table.Body className='divide-y'>
              {data.length > 1 ? (
                data.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                      <Table.Cell> {index + 1} </Table.Cell>
                      <Table.Cell> {item.name} </Table.Cell>
                      <Table.Cell> {item.email} </Table.Cell>
                      <Table.Cell> {item.phone} </Table.Cell>
                      <Table.Cell> {item.message} </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <button
                          onClick={() => deleteRow(item._id)}
                          className='bg-red-500 text-white px-4 py-2 rounded-md'>
                          Delete
                        </button>{" "}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <button
                          onClick={() => editRow(item._id)}
                          className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                          Edit
                        </button>{" "}
                      </Table.Cell>
                    </TableRow>
                  );
                })
              ) : (
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell colSpan={7} className='text-center'>
                    No Data Found
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
