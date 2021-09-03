const path = require('path')
const fs = require('fs')

const templatesDir = path.resolve(__dirname, '../templates')

const render = persons => {
  const html = []

  html.push(persons
    .filter(person => person.getRole() === 'Student')
    .map(student => renderStudent(student))
  )
  html.push(persons
    .filter(person => person.getRole() === 'Teacher')
    .map(teacher => renderTeacher(teacher))
  )
  html.push(persons
    .filter(person => person.getRole() === 'Faculty')
    .map(faculty => renderFaculty(faculty))
  )

  return renderMain(html.join(''))
}

const renderStudent = student => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'student.html'), 'utf8')
  template = replacePlaceholders(template, 'name', student.getName())
  template = replacePlaceholders(template, 'role', student.getRole())
  template = replacePlaceholders(template, 'email', student.getEmail())
  template = replacePlaceholders(template, 'phone', student.getPhone())
  template = replacePlaceholders(template, 'grade', student.getGrade())
  return template
}

const renderTeacher = teacher => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'teacher.html'), 'utf8')
  template = replacePlaceholders(template, 'name', teacher.getName())
  template = replacePlaceholders(template, 'role', teacher.getRole())
  template = replacePlaceholders(template, 'email', teacher.getEmail())
  template = replacePlaceholders(template, 'phone', teacher.getPhone())
  template = replacePlaceholders(template, 'subject', teacher.getSubject())
  return template
}

const renderFaculty = faculty => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'faculty.html'), 'utf8')
  template = replacePlaceholders(template, 'name', faculty.getName())
  template = replacePlaceholders(template, 'role', faculty.getRole())
  template = replacePlaceholders(template, 'email', faculty.getEmail())
  template = replacePlaceholders(template, 'phone', faculty.getPhone())
  template = replacePlaceholders(template, 'position', faculty.getPosition())
  return template
}

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, 'main.html'), 'utf8')
  return replacePlaceholders(template, 'school', html)
}

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp('{{ ' + placeholder + ' }}', 'gm')
  return template.replace(pattern, value)
}

module.exports = render
