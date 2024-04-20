import { useFormik } from "formik";
import *as yup from 'yup'
const schema = yup.object({
    name: yup.string().required('bạn phải nhập tên'),
    cmnd: yup.number().required('bạn phải điền số hộ chiếu'),
    dob: yup.date().nullable().min(new Date(1900), 'năm sinh phải lớn hơn 1900').typeError('số năm bạn điền không đúng').required(),
    nationality: yup.string().required('đây là trường bắt buộc'),
    province: yup.string().required('đây là trường bắt buộc'),
    district: yup.string().required('đây là trường bắt buộc'),
    wards: yup.string().required('đây là trường bắt buộc'),
    apartmentNumber: yup.number().required('đây là trường bắt buộc'),
    phone: yup.number().required('đây là trường bắt buộc'),
    email: yup.string().required('đây là trường bắt buộc'),


})
export default function DeclarationHealth() {
    const { handleSubmit, handleChange, resetForm, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            cmnd: '',
            dob: '',
            gender: true,
            nationality: '',
            companyWorking: '',
            workingParts: '',
            healthInsurance: false,
            province: '',
            district: '',
            wards: '',
            apartmentNumber: '',
            phone: '',
            email: '',
            status: [],
            contact: []

        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values)
        }

    })
    console.log(touched)
    return (
        <form className="w-50 container"
            onSubmit={handleSubmit}>
            <h1>tờ khai y tế</h1>
            <div className="form-group mb-1">
                <label className="form-label">tên</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='name'
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.name && errors.name}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">sổ hộ chiếu/CMND</label>
                <input
                    type="number"
                    className={`form-control`}
                    name='cmnd'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cmnd}
                />
                <span className="text-danger">{touched.cmnd && errors.cmnd}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">năm sinh</label>
                <input
                    type="number"
                    className={`form-control`}
                    name='dob'
                    onChange={handleChange}
                    value={values.dob}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.dob && errors.dob}</span>
            </div>
            <div className="form-group">
                <label className="form-label m-2"><h6>giới tính</h6></label>
                <input
                    type="radio"
                    name='gender'
                    value={true}
                    onChange={handleChange}
                />nam
                <input
                    type="radio"
                    name='gender'
                    value={false}
                    onChange={handleChange}
                />nữ
            </div>
            <div className="form-group mb-1">
                <label className="form-label">quốc tịch</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='nationality'
                    onChange={handleChange}
                    value={values.nationality}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.nationality && errors.nationality}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">công ty làm việc</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='companyWorking'
                    onChange={handleChange}
                    value={values.companyWorking}
                />
            </div>
            <div className="form-group mb-1">
                <label className="form-label">bộ phận làm việc</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='workingParts'
                    onChange={handleChange}
                    value={values.workingParts}
                />
            </div>
            <div>
                <label className="form-label m-2">có thẻ bảo hiểm y tế</label>
                <input
                    type="radio"
                    name='healthInsurance'
                    onChange={handleChange}
                    value={true}
                />
            </div>
            <h3>địa chỉ liên lạc tại Việt Nam</h3>
            <div className="form-group mb-1">
                <label className="form-label">tỉnh thành</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='province'
                    onChange={handleChange}
                    value={values.province}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.province && errors.province}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">quận/huyện</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='district'
                    onChange={handleChange}
                    value={values.district}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.district && errors.district}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">phường xã</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='wards'
                    onChange={handleChange}
                    value={values.wards}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.wards && errors.wards}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">số nhà,phố,tổ dân phố/thôn/đội</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='apartmentNumber'
                    onChange={handleChange}
                    value={values.apartmentNumber}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.apartmentNumber && errors.apartmentNumber}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">điện thoại</label>
                <input
                    type="number"
                    className={`form-control`}
                    name='phone'
                    onChange={handleChange}
                    value={values.phone}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.phone && errors.phone}</span>
            </div>
            <div className="form-group mb-1">
                <label className="form-label">email</label>
                <input
                    type="text"
                    className={`form-control`}
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />
                <span className="text-danger">{touched.email && errors.email}</span>
            </div>

            <div className="form-group">
                <label className="form-label mb-1"><h4>trong vòng 14 ngày qua anh, chị có thấy xuất hiện dấu hiệu nào sau đây không ?</h4></label>
                <input type="checkbox" name="status" onChange={handleChange} value={'ho'} />ho <br />
                <input type="checkbox" name="status" onChange={handleChange} value={'sốt'} />sốt <br />
                <input type="checkbox" name="status" onChange={handleChange} value={'khó thở'} />khó thở <br />
                <input type="checkbox" name="status" onChange={handleChange} value={'viêm họng'} />viêm họng <br />
                <input type="checkbox" name="status" onChange={handleChange} value={'mệt mỏi'} />mệt mỏi <br />
                <input type="checkbox" name="status" onChange={handleChange} value={'viêm phổi'} />viêm phổi <br />
            </div>
            <div className="form-group mb-1">
                <label className="form-label">trong vòng 14 ngày qua anh/chị có tiếp xúc với ?</label><br />
                <input type="checkbox" name="contact" onChange={handleChange} value={'người bệnh hoặc nghi ngờ mắc bệnh COVID 19'} /> người bệnh hoặc nghi ngờ mắc bệnh COVID 19<br />
                <input type="checkbox" name="contact" onChange={handleChange} value={'người từ nước có bệnh COVID 19'} /> người từ nước có bệnh COVID 19<br />
                <input type="checkbox" name="contact" onChange={handleChange} value={'người có biểu hiện (sốt, ho, khó thở,viêm phổi)'} /> người có biểu hiện (sốt, ho, khó thở,viêm phổi)
            </div>
            <div>
                <button type="submit">submit</button>
                <button type="button" onClick={resetForm}>clear</button>
            </div>

        </form>
    )
}