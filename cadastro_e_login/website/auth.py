from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db   ##significa --> de  __init__.py importa db
from flask_login import login_user, login_required, logout_user, current_user

f=True

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        nome_idoso = request.form.get('login-idoso')
        password = request.form.get('senha2')

        user = User.query.filter_by(nome_idoso=nome_idoso).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logado com sucesso!!', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.base'))
            else:
                flash('Senha incorreta, tente novamente.', category='error')
        else:
            flash('Este nome não existe no nosso banco de dados.', category='error')

    return render_template("login.html", user=current_user)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))



@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        nome_idoso = request.form.get('nome-idoso')
        Nome_tutor = request.form.get('input-nome-tutor')
        password1 = request.form.get('senha')
        password2 = request.form.get('verificar-senha')
        telefone = request.form.get('telefone')
        user = User.query.filter_by(nome_idoso=nome_idoso).first()
       
        if user:
            flash('Email já existente', category='error')
        elif len(email) < 4:
            flash('O email tem que ser maior que 3 caracteres', category='error')
        elif len(Nome_tutor) < 2:
            flash('O nome do tutor tem que ser maior que 3 caracter', category='error')
        elif len(telefone) < 8:
            flash('O telefone tem que ter mais que 8 digitos', category='error')
        elif len(nome_idoso) < 2:
            flash('O nome do idoso tem que ser maior que 3 caracter', category='error')
        elif password1 != password2:
            flash('Senhas diferentes', category='error')
        elif len(password1) < 5:
            flash('A senha tem que ser maior que 5 caracteres', category='error')
        else:
            new_user = User(email=email, nome_idoso=nome_idoso, telefone=telefone, Nome_tutor=Nome_tutor, password=generate_password_hash(
                password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()  
            login_user(new_user, remember=True)
            flash('Conta criada !!!', category='success')
            return redirect(url_for('views.home'))

    return render_template("sign-up.html", user = current_user)

@auth.route('/jogos')
def jogos():

   return render_template('jogos.html', user = current_user)
