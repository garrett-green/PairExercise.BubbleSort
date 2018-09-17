describe("Merge Sort", function() {
    describe("mergeSort function", function() {
        it("handles an empty array", function() {
            expect(Sorting.mergeSort([])).toEqual([]);
        });

        it("handles single item array", function() {
            expect([42].length).toEqual(1);
            expect(Sorting.mergeSort([42])).toEqual([42]);
        });

        it("handles multiple items in an array", function() {
            expect([42, 50].length).toEqual(2);
            expect(Sorting.mergeSort([42, 50])).toEqual([42, 50]);
        });

        it("doesnt use built-in sort method", function() {
            let arr = [1, 3, 2];
            // debugger;
            spyOn(arr, "sort").and.callThrough();
            Sorting.mergeSort(arr);
            expect(arr.sort.calls.count()).toEqual(0);
        });

        it("returns sorted array correctly; 2 items", function() {
            let arr = [100, 5];
            // spyOn(arr, 'sort').and.callThrough();
            Sorting.mergeSort(arr);
            expect(arr).toEqual([5, 100]);
        });

        it("returns sorted array correctly; 3 items", function() {
            let arr = [3, 2, 1];
            // spyOn(arr, 'sort').and.callThrough();
            Sorting.mergeSort(arr);
            expect(arr).toEqual([1, 2, 3]);
        });

        it("returns sorted array correctly; 5 items", function() {
          let arr = [3, 100, 2, 45, 1];
          // spyOn(arr, 'sort').and.callThrough();
          Sorting.mergeSort(arr);
          expect(arr).toEqual([1, 2, 3, 45, 100]);
      });

    });

    describe("merge function", function() {
        it("takes two arrays and returns a single array", function() {
            let arr1 = [1, 2];
            let arr2 = [3, 4];
            Sorting.merge(arr1, arr2);
            expect(arr).toEqual([1, 2, 3, 4]);
        });
    });

    describe("split function", function() {
        it("takes a single array and returns two", function() {
            let arr1 = [1, 2, 3, 4];
            let a, b = Sorting.split(arr1);
            expect(a).toEqual([1, 2]);
            expect(b).toEqual([3, 4]);
        });
    });
});
