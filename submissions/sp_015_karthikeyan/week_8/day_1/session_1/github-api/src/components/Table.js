import React from 'react';

const Table = props => {
    let tableData = props.data.map(ele => {
        return (
            <tr key={ele.login}>
                <td className = "align-middle"><img src={ele.avatar_url} /></td>
                <td className = "align-middle">{ele.login}</td>
                <td className = "align-middle"><a href={ele.html_url}>Link to Github</a></td>
            </tr>
        )
    })

    return (
        <table className = "table text-center my-5">
          <thead>
            <tr>
              <th className = "align-middle">Avatar</th>
              <th className = "align-middle">Name</th>
              <th className = "align-middle">Link To Github</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
    )
}

export default Table;