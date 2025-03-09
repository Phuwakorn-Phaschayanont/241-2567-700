
const validatedata = (userdata) => {
          let errors = []

          if (!userdata.firstName) {
                    errors.push('กรุณากรอกชื่อ')
          }
          if (!userdata.lastName) {
                    errors.push('กรุณากรอกนามสกุล')
          }
          if (!userdata.age) {
                    errors.push('กรุณากรอกอายุ')
          }
          if (!userdata.gender) {
                    errors.push('กรุณาเลือกเพศ')
          }
          if (!userdata.description) {
                    errors.push('กรุณากรอกคำอธิบาย')
          }
          if (!userdata.interests) {
                    errors.push('กรุณาเลือกความสนใจ')
          }
          return errors
}
const submitData = async () => {
          let firstNameDOM = document.querySelector('input[name=firstname]');
          let lastNameDOM = document.querySelector('input[name=lastname]');
          let ageDOM = document.querySelector('input[name=age]');
          let genderDOM = document.querySelector('input[name=gender]:checked') || {}
          let interestDOMs = document.querySelectorAll('input[name=interest]:checked') || {}
          let descriptionDOM = document.querySelector('textarea[name=description]');

          let messageDOM = document.getElementById('message');

          try {
                    let interest = ''
                    for (let i = 0; i < interestDOMs.length; i++) {
                              interest += interestDOMs[i].value
                              if (i != interestDOMs.length - 1) {
                                        interest += ', '
                              }
                    }

                    let userData = {
                              firstName: firstNameDOM.value,
                              lastName: lastNameDOM.value,
                              age: ageDOM.value,
                              gender: genderDOM.value,
                              description: descriptionDOM.value,
                              interests: interest

                    }
                    console.log('submitData', userData);

                    /*
                    const errors = validatedata(userData);
                    if (errors.length > 0) {
                              //มี error
                              throw {
                                        message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                                        errors: errors
                              }
                    }
                    */
                    const response = await axios.post('http://localhost:8000/users', userData);
                    console.log('response', response.data);
                    messageDOM.innerText = 'บันทึกข้อมูลเรียบร้อยแล้ว'
                    messageDOM.className = 'message success'
          } catch (err) {
                    console.log('error message', err.message);
                    console.log('error', err.errors);
                    if (err.response) {
                              console.log('error.response', err.response.data.message);
                              err.message = err.response.data.message
                              err.errors = err.response.data.errors
                    }

                    let htmlData = '<div>'
                    htmlData += `<div> ${err.message} </div>`
                    htmlData += '<ul>'
                    for (let i = 0; i < err.errors.length; i++) {
                              htmlData += `<li> ${err.errors[i]} </li>`
                    }
                    htmlData += '</ul>'
                    htmlData += '</div>'
                    messageDOM.innerHTML = htmlData
                    messageDOM.className = 'message danger'
          }
}