<form method="post" action="#">
    <div class="field half first">
        <label for="name">Name</label>
        <input required type="text" name="name" id="name" />
    </div>
    <div class="field half">
        <label for="email">Email</label>
        <input required type="text" name="email" id="email" />
    </div>
    <div class="field">
        <label for="message">Message</label>
        <textarea required name="message" id="message" rows="6"></textarea>
    </div>
    <ul class="actions">
        <li><input type="submit" value="Send Message" class="special" /></li>
        <li><input type="reset" value="Clear" /></li>
    </ul>
</form>