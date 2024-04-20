const StudentList = [
    {
        name: "giang",
        class: "reactjs",
        email: "giang@gmail.com",
        phone: '0909012303'
    },
    {
        name: "hải",
        class: "reactjs",
        email: "hải@gmail.com",
        phone: '0909012233'
    },
    {
        name: "minh",
        class: "reactjs",
        email: "minh@gmail.com",
        phone: '0909023443'
    }
]

export default function StudentInfoComponent() {
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>lớp</th>
                    <th>email</th>
                    <th>sdt</th>
                </tr>
            </thead>
            <tbody>
                {
                    StudentList.map((info) => (
                        <tr>
                            <td>{info.name}</td>
                            <td>{info.class}</td>
                            <td>{info.email}</td>
                            <td>{info.phone}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}