Books.find().sort({ createdAt: -1 }) // newest first ✅
Books.find().sort({ createdAt: 1 }) // oldest first
Books.find().sort({ title: 1 }) // A-Z by title
Books.find().sort({ price: -1 }) // highest price first

-1 = descending (newest/largest first) 1 = ascending (oldest/smallest first)

// Leaning Questions
After completing, you should be able to answer:

1. What is a Schema? What is a Model?
2. What does mongoose.connect() return?
3. What is the difference between:
   - Model.create(data)
   - new Model(data) + model.save()
4. What does { new: true } do in findByIdAndUpdate?
5. What does { runValidators: true } do?
6. What does { timestamps: true } add to documents?
7. What happens if you send a field NOT in schema?
8. What is enum and when to use it?
9. What is the difference between find() and findOne() and findById()?
10. Why must /category route come BEFORE /:id route?
